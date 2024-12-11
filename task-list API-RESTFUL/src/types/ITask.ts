interface ITask {
    id: number,
    title: string,
    desc: string,
    isDone: boolean,
    createdAt: Date,
    finishedAt: Date | null
}

export default ITask;