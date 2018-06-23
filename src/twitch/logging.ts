const consoleLog = (message: string): void => {
    console.log(`[${getTimeStamp()}] ${message}`);
};

const getTimeStamp = (): string => {
    const date = new Date();
    const h = addZero(date.getUTCHours());
    const m = addZero(date.getUTCMinutes());
    return `${h}:${m}`;
};

const addZero = (num: number): string => {
    if (num < 10) {
        return `0${num}`;
    }
    return `${num}`;
};

class DatabaseLogger {
    constructor(db: DB) {
        this.db = db;
    }

    public logQuery(username, channel, query, response) {
        this.db.logQuery(username, channel, query, response).then(() => {
            consoleLog(`Username: ${username}, Channel: ${channel}, Query: ${query}, Response: ${response}`);
        });
    }
};

export { consoleLog, DatabaseLogger };
