import { useState, useEffect } from 'react'
import { useLocalStorage } from './useLocalStorage';

const [isDark, setIsDark] = useLocalStorage("false")

    useEffect( () => {
        if(isDark === 'true'){
            document.body.classList.add('dark-mode')
        }
        else(
            document.body.classList.remove('dark-mode')
        )
        })