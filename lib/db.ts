import Database from "better-sqlite3"

import path from "path"

const db_path = path.join(process.cwd(), "lib/data", "database.db");
console.log(db_path);

let db: Database.Database;


namespace API {

    export function __getChapters() {
        db = new Database(db_path);
        const data = db.prepare("SELECT * FROM chapters").all();
        db.close()
        return data;
    }

    export function __getLessons() {
        db = new Database(db_path);
        const data= db.prepare("SELECT * FROM lessons").all();
        db.close()
        return data;
    }


    export function __getChapterById(id: number) {
        db = new Database(db_path);
        const res = db.prepare("SELECT * FROM chapters WHERE id=?");
        const data= res.run(id);
        db.close()
        return data;
    }

    export function __getLessonsByChapter(chapter: number) {
        db = new Database(db_path);
        const res = db.prepare("SELECT * FROM lessons WHERE chapter=?")
        const res2 = res.run(chapter);
        const data= db.prepare("SELECT * FROM lessons WHERE chapter=?").get(res2.lastInsertRowid);
        db.close()
        return data;
    }

    export function __getLessonsById(id1: number) {
        db = new Database(db_path);
        const data = db.prepare("SELECT * FROM lessons WHERE id=?").get(id1)
        db.close()
        return data;

    }


}


export default API;






