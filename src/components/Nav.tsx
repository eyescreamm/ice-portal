import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from "framer-motion"

const Nav = () => {
  return(
    <motion.nav>
      <motion.ul>
        <motion.li>
          <Link to="/">HOME</Link>
        </motion.li>
        <motion.li>
          <Link to="/blog">BLOG</Link>
        </motion.li>
      </motion.ul>
    </motion.nav>
  )
}

export default Nav