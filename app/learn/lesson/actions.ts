import API from "@/lib/db";
import GetLessonsById = API.__getLessonsById;





export async function getLessonsById(id1: number){
    return GetLessonsById(id1);
}