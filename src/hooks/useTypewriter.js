import { useState, useEffect } from 'react'

export function useTypewriter(words, typingSpeed = 80, deletingSpeed = 45, pauseMs = 1800) {
  const [displayed, setDisplayed] = useState('')
  const [wordIdx, setWordIdx] = useState(0)
  const [charIdx, setCharIdx] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const word = words[wordIdx]
    let timeout

    if (!deleting) {
      if (charIdx < word.length) {
        timeout = setTimeout(() => setCharIdx(c => c + 1), typingSpeed)
      } else {
        timeout = setTimeout(() => setDeleting(true), pauseMs)
      }
    } else {
      if (charIdx > 0) {
        timeout = setTimeout(() => setCharIdx(c => c - 1), deletingSpeed)
      } else {
        setDeleting(false)
        setWordIdx(i => (i + 1) % words.length)
      }
    }

    setDisplayed(word.slice(0, charIdx))
    return () => clearTimeout(timeout)
  }, [charIdx, deleting, wordIdx, words, typingSpeed, deletingSpeed, pauseMs])

  return displayed
}
