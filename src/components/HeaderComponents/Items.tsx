import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';

type Info = {
  link: string;
  name: string;
};

const Items = ({ link, name }: Info) => {
  return (
    <NavLink end to={link}>
      <motion.div
        whileHover={{
          scale: [null, 1.5, 1.35, 1.5, 1.35, 1.5, 1.35, 1.5, 1.35, 1.5, 1.3],
        }}
        transition={{ duration: 0.3 }}
      >
        {name}
      </motion.div>
    </NavLink>
  );
};

export default Items;
