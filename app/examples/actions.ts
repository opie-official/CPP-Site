"use server"
import API from "@/lib/db"





export async function GetExamples(){
    return API.__getExamples();
}