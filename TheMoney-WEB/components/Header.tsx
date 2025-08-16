
'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Colors } from '../constants/Colors';
import TheMoney from '@/assets/images/the-money.png'


interface NavButtonProps {
  text: string;
  href: string;
}

const NavButton: React.FC<NavButtonProps> = ({ text, href }) => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <Link 
      href={href} 
      style={{
        ...styles.navButton,
        transform: isHovered ? 'scale(1.05) translateY(-2px)' : 'scale(1) translateY(0)',
        boxShadow: isHovered 
          ? '0 10px 25px rgba(0, 0, 0, 0.15), 0 4px 10px rgba(0, 0, 0, 0.1)' 
          : '0 4px 6px rgba(0, 0, 0, 0.05)',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Gradiente animado da borda */}
      <div style={{
        ...styles.gradientBorder,
        opacity: isHovered ? 1 : 0.8,
      }}></div>
      
      {/* Background do botão */}
      <div style={{
        ...styles.buttonBackground,
        backgroundColor: isHovered ? Colors.neutral1 : Colors.neutral2, 
      }}></div>

      {/* Efeito de brilho no hover */}
      {isHovered && (
        <div style={styles.glowEffect}></div>
      )}

      {/* Conteúdo do botão */}
      <span style={{
        ...styles.buttonText,
        color: isHovered ? Colors.neutral8 : Colors.neutral7,
      }}>
        {text}
      </span>
    </Link>
  );
};

const Header: React.FC = () => {
  const navButtons = [
    { text: 'Relatórios', href: '/relatorios' },
    { text: 'Categorias', href: '/categorias' },
    { text: 'Despesas', href: '/despesas' },
    { text: 'Ações', href: '/acoes' },
  ];

  return (
    <>
      {/* Estilos CSS customizados para a animação do gradiente */}
      <style jsx global>{`
        @keyframes gradient-x {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        
        @keyframes gradient-rotate {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        @keyframes shimmer {
          0% {
            background-position: -200% 0;
          }
          100% {
            background-position: 200% 0;
          }
        }

        @keyframes glow-pulse {
          0%, 100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 0.6;
            transform: scale(1.02);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-2px);
          }
        }
      `}</style>
      
      <header style={styles.header}>
        {/* Logo */}
        <div style={styles.logoContainer}>
          <Link href="/" style={styles.logoLink}>
            <Image
              src={TheMoney}
              alt="The Money Logo"
              width={200}
              height={50}
              style={styles.logoImage}
            />
          </Link>
        </div>

        {/* Navegação */}
        <nav style={styles.nav}>
          {navButtons.map((button) => (
            <NavButton key={button.text} text={button.text} href={button.href} />
          ))}
        </nav>
      </header>
      
      {/* Espaçamento para compensar o header fixo */}
      <div style={styles.spacer}></div>
    </>
  );
};

const styles = {
  header: {
    position: 'fixed' as const,
    top: 0,
    left: 0,
    width: '100%',
    padding: '16px 24px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    zIndex: 50,
    backgroundColor: Colors.neutral1,
    boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
    backdropFilter: 'blur(4px)',
  },
  logoContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  logoLink: {
    transition: 'transform 0.2s ease-in-out',
    display: 'block',
  },
  logoImage: {
    borderRadius: '8px',
    width: '300px',
  },
  nav: {
    display: 'flex',
    gap: '16px',
  },
  navButton: {
    position: 'relative' as const,
    padding: '12px 24px',
    borderRadius: '12px',
    fontSize: '16px',
    fontWeight: '500',
    textDecoration: 'none',
    transition: 'all 0.3s ease-in-out',
    display: 'block',
    overflow: 'hidden',
    background: `linear-gradient(135deg, 
      ${Colors.neutral1} 0%, 
      ${Colors.neutral2} 50%, 
      ${Colors.neutral1} 100%)`,
    border: '2px solid transparent',
    backgroundClip: 'padding-box',
  },
  gradientBorder: {
    position: 'absolute' as const,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    borderRadius: '12px',
    padding: '2px',
    background: `linear-gradient(45deg, 
      ${Colors.pinkBright}, 
      ${Colors.pinkMedium}, 
      ${Colors.purpleStrong}, 
      ${Colors.purpleDark}, 
      ${Colors.purpleDeep}, 
      ${Colors.blueDeep}, 
      ${Colors.blueMedium}, 
      ${Colors.blue}, 
      ${Colors.blueLight}, 
      ${Colors.blueSky})`,
    backgroundSize: '400% 400%',
    animation: 'gradient-x 3s ease infinite',
    zIndex: -1,
  },
  buttonBackground: {
    position: 'absolute' as const,
    top: '2px',
    left: '2px',
    right: '2px',
    bottom: '2px',
    borderRadius: '10px',
    // Removido o backgroundImage e adicionado backgroundColor
    backgroundColor: Colors.neutral3, // Cor de fundo padrão
    transition: 'background-color 0.3s ease-in-out', // Transição suave para o hover
    zIndex: -1,
  },
  buttonText: {
    position: 'relative' as const,
    zIndex: 10,
    color: Colors.neutral7,
    fontWeight: '600',
    textShadow: '0 1px 2px rgba(0, 0, 0, 0.1)',
  },
  glowEffect: {
    position: 'absolute' as const,
    top: '-2px',
    left: '-2px',
    right: '-2px',
    bottom: '-2px',
    borderRadius: '14px',
    background: `linear-gradient(45deg, 
      ${Colors.pinkBright}40, 
      ${Colors.purpleStrong}40, 
      ${Colors.blue}40, 
      ${Colors.blueSky}40)`,
    backgroundSize: '400% 400%',
    animation: 'glow-pulse 2s ease-in-out infinite, gradient-x 3s ease infinite',
    zIndex: -2,
    filter: 'blur(8px)',
  },
  spacer: {
    height: '80px',
  },
};

export default Header;


