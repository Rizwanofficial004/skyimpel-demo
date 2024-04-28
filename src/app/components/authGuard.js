'use client'
import { useRouter } from 'next/navigation';
import { useLayoutEffect } from 'react';
import { useSelector } from 'react-redux'

const AuthGuard = ({children}) => {
    const { user } = useSelector(state => state.auth)
    const router = useRouter()

    useLayoutEffect(() => {
      switch(user?.current_step) {
        case 1: 
          router.replace('/auth/step2')
          break
        case 2:
          router.replace('/auth/step3')
          break
        case 3:
          router.replace('/')
          break
        default:
          router.replace('/auth')
      }
    },[])

    if (!user) return null;

    return children;
  
}

export default AuthGuard