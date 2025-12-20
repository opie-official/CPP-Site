import Database from "better-sqlite3"

import path from "path"

const db_path = path.join(process.cwd(), "lib/data", "database.db");
console.log(db_path);

const db = new Database(db_path);


namespace API {

    export function __getChapters() {
        return db.prepare("SELECT * FROM chapters").all();
    }

    export function __getLessons() {
        return db.prepare("SELECT * FROM lessons").all();
    }


    export function __getChapterById(id: number) {
        const res = db.prepare("SELECT * FROM chapters WHERE id=?");
        return res.run(id);
    }

    export function __getLessonsByChapter(chapter: number) {
        const res = db.prepare("SELECT * FROM lessons WHERE chapter=?")
        const res2 = res.run(chapter);
        return db.prepare("SELECT * FROM lessons WHERE chapter=?").get(res2.lastInsertRowid);
    }

    export function __getLessonsById(id1: number) {
        const res = db.prepare("SELECT * FROM lessons WHERE id=?").get(id1)
        return res;

    }


}


export default API;






