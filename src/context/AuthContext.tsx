import {createContext, useContext, useState, useEffect} from 'react'
import axios from '../api/axios'

type User = {
    username: string
    email: string
    role: string
    avatar?: string
}

type AuthContextType = {
    user: User | null
    login: (token: string) => Promise<void>
    logout: () => void
}

const AuthContext = createContext<AuthContextType>({
    user: null,
    login: async () => {
    },
    logout: () => {
    },
})

export const AuthProvider = ({children}: { children: React.ReactNode }) => {
    const [user, setUser] = useState<User | null>(null)

    const login = async (token: string) => {
        localStorage.setItem('access_token', token)
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
        try {
            const res = await axios.get('/users/users/') // 获取当前用户列表
            const me = res.data[0] // 🟡 示例：取第一个用户，可改为 /me/ 接口
            setUser(me)
        } catch (err) {
            console.error('Fetch user failed', err)
        }
    }

    const logout = () => {
        localStorage.removeItem('access_token')
        setUser(null)
        delete axios.defaults.headers.common['Authorization']
    }

    useEffect(() => {
        const token = localStorage.getItem('access_token')
        if (token) {
            login(token)
        }
    }, [])

    return (
        <AuthContext.Provider value={{user, login, logout}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext)
