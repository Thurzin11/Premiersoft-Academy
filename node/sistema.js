const fs = require('fs');
const path = require('path');

class BackupSystem {
    constructor(pastaOrigem, pastaBackup) {
        this.pastaOrigem = pastaOrigem;
        this.pastaBackup = pastaBackup;
        this.logFile = path.join(pastaBackup, 'backup.log');

        // Criar pasta de backup se não existir
        if (!fs.existsSync(pastaBackup)) {
            fs.mkdirSync(pastaBackup, { recursive: true });
        }
    }

    iniciar() {
        console.log(`Monitorando a pasta: ${this.pastaOrigem}`);
        
        fs.watch(this.pastaOrigem, (evento, arquivo) => {
            // Ignorar arquivos temporários (comum em alguns editores)
            if (arquivo.startsWith('.')) return;
            
            this.realizarBackup(arquivo);
        });
    }

    realizarBackup(arquivo) {
        const origem = path.join(this.pastaOrigem, arquivo);
        const destino = path.join(this.pastaBackup, arquivo);
        
        // Verificar se o arquivo ainda existe
        // (necessário pois o evento pode ser disparado na deleção)
        if (fs.existsSync(origem)) {
            try {
                // Copiar arquivo
                fs.copyFileSync(origem, destino);
                
                // Registrar no log
                const data = new Date().toISOString();
                const logMessage = `[${data}] Backup realizado: ${arquivo}\n`;
                fs.appendFileSync(this.logFile, logMessage);
                
                console.log(`Backup realizado: ${arquivo}`);
            } catch (erro) {
                console.error(`Erro ao fazer backup de ${arquivo}:`, erro);
            }
        }
    }
}

// Uso do sistema de backup
const backup = new BackupSystem('./arquivos', './backup');
backup.iniciar();