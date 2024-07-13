import { NextResponse } from "next/server";


export function middleware(request){
    const path = request.nextUrl.pathname

    const isPublicPath = path === '/admin/login'

    const token=request.cookies.get("token")?.value || ""
 
    if(isPublicPath && token){
        return NextResponse.redirect(new URL('/admin/dashboard',request.url))

    }
    if(!isPublicPath && !token){
        return NextResponse.redirect(new URL('/admin/login',request.url))

    }
}


export const config={
    matcher:[
     
        '/admin/dashboard',
        '/admin/login',
        '/admin/post-blog',
        '/admin/post-case-study',


    ]
}