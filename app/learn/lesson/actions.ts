"use server"
import API from "@/lib/db";





export async function getLessonsById(id1: number){
    return API.__getLessonsById(id1);
}