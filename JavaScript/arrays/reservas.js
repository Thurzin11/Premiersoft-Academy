const reservasAtuais = [
  { id: 1, sala: "A1", horario: "09:00" },
  { id: 2, sala: "B1", horario: "10:00" },
];

// Tarefas:
// 1. Adicione uma nova reserva
// 2. Atualize o horário de uma reserva existente
// 3. Combine reservas de duas salas diferentes
// 4. Crie uma função que aceite múltiplas reservas como argumentos

const novasReservas = [...reservasAtuais];

const newReserva = {
  id: 3,
  sala: "C1",
  horario: "11:00",
};

novasReservas.push(newReserva);

// console.log(reservasAtuais);
// console.log(novasReservas);

function alterarReserva(idReserva, horarioNovo) {
  const novasReservasIniciaisComTrue = novasReservas.map((reserva) => {
    return reserva.id === idReserva
      ? { ...reserva, horario: horarioNovo }
      : reserva;
  });
  console.log(novasReservasIniciaisComTrue);
}

// alterarReserva(1, "07:00");

function combinaReservas(idFirstReserva, idSecondReserva) {
  const reserva1 = novasReservas.find(
    (reserva) => reserva.id == idFirstReserva
  );
  const reserva2 = novasReservas.find(
    (reserva) => reserva.id == idSecondReserva
  );
  const reservaDupla = {
    firstReserva: reserva1,
    secondReserva: reserva2,
  };
  const reservasDuplas = [reservaDupla];
  console.log(reservasDuplas);
}

// combinaReservas(1, 2);

const reservasNew = [
  { id: 10, sala: "A8", horario: "09:00" },
  { id: 20, sala: "B8", horario: "10:00" },
];

function addReservas(reservas) {
  reservasTeste = [...reservasAtuais, ...reservas];
  console.log(reservasTeste);
}

addReservas(reservasNew);
