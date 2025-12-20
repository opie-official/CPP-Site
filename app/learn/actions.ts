"use server"





import API from "@/lib/db";
import __getChapters = API.__getChapters;
import __getLessons = API.__getLessons;

export async function GetChapters(){
    return __getChapters()
}

export async function GetLessons(){
    return __getLessons();
}