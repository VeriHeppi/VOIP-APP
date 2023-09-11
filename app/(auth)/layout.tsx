const AuthLayout = ({children} : {children: React.ReactNode}) => {
    return (  
        <div className="flex flex-col items-center justify-center min-h-screen py-2 -mt-20 px-14 text-center">
            <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
                {children}
            </main>
        </div>
    );
}
 
export default AuthLayout;