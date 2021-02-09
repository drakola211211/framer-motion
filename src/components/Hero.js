import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import Planet1 from '../images/planet1.svg'
import Planet3 from '../images/planet3.svg'
import Planet4 from '../images/planet4.svg'

const Section = styled.section`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #131313;
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 100vh;
  padding: 3rem calc((100vw - 1300px) / 2);

 
`;

const ColumnLeft = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 5rem 2rem;
    color: #fff;

    h1 {
        margin-bottom: .5rem;
        font-size: 2rem;
    }

    p {
        margin: 2rem 0;
        font-size: 4rem;
        line-height: 1.1;
    }
`;

const Button = styled(motion.button)`
    padding: 1rem 3rem;
    font-size: 1rem;
    border: 2px solid #fff;
    border-radius: 4px;
    outline: none;
    cursor: pointer;
    background: transparent;
    color: #fff;
`;

const Image = styled(motion.img)`
    position: absolute;
    height: 100%;
    width: 100%;
    max-width: 250px;
    max-height: 250px;
    cursor: pointer;
`

const ColumnRight = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2rem;
    position: relative;

    ${Image}:nth-child(1) {
        top: 10px;
        left: 10px;
    }
    
    ${Image}:nth-child(2) {
        top: 170px;
        right: 10px;
    }

    ${Image}:nth-child(3) {
        top: 350px;
        left: 50px;
    }

`;



function Hero() {

    const fadeLeft = {
        hidden: { opacity: 0, x: -100 },
        visible: { opacity: 1, x: 0 }
    }
    return (
        <Section>
            <Container>
                <ColumnLeft>
                    <motion.h1
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                    >
                        Welcome to Space
                    </motion.h1>
                    <motion.p
                        variants={fadeLeft}
                        initial='hidden'
                        animate='visible'
                        transition={{ duration: 1 }}
                    >
                        Journet to the unknown</motion.p>
                    <Button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{
                            scale: .95,
                            backgroundColor: '#67f6e7',
                            bordr: 'none',
                            color: '#000'
                        }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1, transition: { duration: 1.5 } }}
                    >
                        Get Started</Button>
                </ColumnLeft>
                <ColumnRight>
                    <Image src={Planet1} alt="planet"
                        whileTap={{ scale: .95 }}
                        drag={true}
                        dragConstraints={{ left: 0, right: 250, top: 0, bottom: 50 }}
                        initial={{ opacity: 0, y: -100 }}
                        animate={{ opacity: 1, y: 0, transition: { duration: 1 } }}
                    />
                  
                    <Image src={Planet3} alt="planet"
                        whileTap={{ scale: .8 }}
                        drag={true}
                        dragConstraints={{ left: 0, right: 0, top: 0, bottom: 50 }}
                        initial={{ opacity: 0, x: -100 }}
                        animate={{ opacity: 1, x: 0, transition: { duration: 1 } }}
                    />
                    <Image src={Planet4} alt="planet"
                        whileTap={{ scale: .9 }}
                        drag={true}
                        dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
                        initial={{ opacity: 0, y: -100 }}
                        animate={{ opacity: 1, y: 0, transition: { duration: 1 } }}
                    />
                </ColumnRight>
            </Container>
        </Section>
    )
}

export default Hero
