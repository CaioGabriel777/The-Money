'use client'

import React from 'react';
import GraficoEntradasSaidas from "../../components/GraficoEntradasSaidas";
import { Colors } from "@/constants/Colors";

interface MetricCardProps {
  title: string;
  value: string;
  icon: string;
  trend?: 'up' | 'down' | 'neutral';
}

const MetricCard: React.FC<MetricCardProps> = ({ title, value, icon, trend = 'neutral' }) => {
  const [isHovered, setIsHovered] = React.useState(false);

  const getTrendColor = () => {
    switch (trend) {
      case 'up': return Colors.blueLight;
      case 'down': return Colors.pinkBright;
      default: return Colors.neutral6;
    }
  };

  return (
    <div
      style={{
        ...styles.metricCard,
        transform: isHovered ? 'translateY(-4px)' : 'translateY(0)',
        boxShadow: isHovered 
          ? '0 12px 24px rgba(0, 0, 0, 0.15)' 
          : '0 4px 12px rgba(0, 0, 0, 0.08)',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div style={styles.cardHeader}>
        <div style={styles.cardIcon}>{icon}</div>
        <div style={{...styles.trendIndicator, backgroundColor: getTrendColor()}}></div>
      </div>
      <h3 style={styles.cardTitle}>{title}</h3>
      <p style={styles.cardValue}>{value}</p>
    </div>
  );
};

interface SidebarItemProps {
  label: string;
  icon: string;
  isActive?: boolean;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ label, icon, isActive = false }) => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <div
      style={{
        ...styles.sidebarItem,
        backgroundColor: isActive || isHovered ? Colors.blueSky : 'transparent',
        borderLeft: isActive ? `4px solid ${Colors.blueLight}` : '4px solid transparent',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span style={styles.sidebarIcon}>{icon}</span>
      <span style={styles.sidebarLabel}>{label}</span>
    </div>
  );
};

export default function Home() {
  return (
    <>
      {/* Estilos CSS para animações */}
      <style jsx global>{`
        @keyframes gradient-shift {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        
        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.8;
          }
        }
      `}</style>

      <div style={styles.container}>
        {/* Sidebar */}
        <div style={styles.sidebar}>
          <div style={styles.sidebarHeader}>
            <h4 style={styles.sidebarTitle}>Menu</h4>
          </div>
          <nav style={styles.sidebarNav}>
            <SidebarItem label="Dashboard" icon="📊" isActive={true} />
            <SidebarItem label="Relatórios" icon="📈" />
            <SidebarItem label="Configurações" icon="⚙️" />
          </nav>
        </div>

        {/* Conteúdo principal */}
        <div style={styles.mainContent}>
          {/* Header da página */}
          <div style={styles.pageHeader}>
            <h1 style={styles.pageTitle}>Relatório Mensal</h1>
            <div style={styles.headerGradient}></div>
          </div>

          {/* Cards de métricas */}
          <div style={styles.metricsGrid}>
            <MetricCard 
              title="Patrimônio atual" 
              value="R$ 15.000" 
              icon="💰" 
              trend="up"
            />
            <MetricCard 
              title="Entradas" 
              value="R$ 1.200" 
              icon="📈" 
              trend="up"
            />
            <MetricCard 
              title="Saídas" 
              value="R$ 320" 
              icon="📉" 
              trend="down"
            />
          </div>

          {/* Seção do gráfico */}
          <div style={styles.chartSection}>
            <div style={styles.chartContainer}>
              <div style={styles.chartHeader}>
                <h2 style={styles.chartTitle}>Entradas x Saídas</h2>
              </div>
              <div style={styles.chartContent}>
                <GraficoEntradasSaidas />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

const styles = {
  container: {
    display: 'flex',
    minHeight: '100vh',
    backgroundColor: Colors.neutral1,
  },
  
  // Sidebar Styles
  sidebar: {
    width: '280px',
    background: `linear-gradient(180deg, ${Colors.blueLight} 0%, ${Colors.blueMedium} 100%)`,
    padding: '24px 0',
    boxShadow: '4px 0 12px rgba(0, 0, 0, 0.1)',
  },
  sidebarHeader: {
    padding: '0 24px 24px',
    borderBottom: `1px solid ${Colors.neutral1}`,
  },
  sidebarTitle: {
    color: Colors.neutral1,
    fontSize: '20px',
    fontWeight: '600',
    margin: 0,
    marginTop: '12px',
  },
  sidebarNav: {
    padding: '24px 0',
  },
  sidebarItem: {
    display: 'flex',
    alignItems: 'center',
    padding: '12px 24px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    margin: '4px 0',
  },
  sidebarIcon: {
    fontSize: '26px',
    marginRight: '12px',
    width: '24px',
  },
  sidebarLabel: {
    color: Colors.neutral1,
    fontSize: '16px',
    fontWeight: '500',
  },

  // Main Content Styles
  mainContent: {
    flex: 1,
    padding: '32px',
    backgroundColor: Colors.neutral1,
  },
  pageHeader: {
    position: 'relative' as const,
    marginBottom: '32px',
    padding: '24px 0',
  },
  pageTitle: {
    fontSize: '32px',
    fontWeight: '700',
    color: Colors.neutral8,
    margin: 0,
    position: 'relative' as const,
    zIndex: 1,
  },
  headerGradient: {
    position: 'absolute' as const,
    bottom: 0,
    left: 0,
    height: '4px',
    width: '120px',
    background: `linear-gradient(90deg, ${Colors.pinkBright}, ${Colors.purpleStrong}, ${Colors.blueLight})`,
    borderRadius: '2px',
  },

  // Metrics Grid
  metricsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '24px',
    marginBottom: '32px',
  },
  metricCard: {
    backgroundColor: Colors.neutral2,
    border: `1px solid ${Colors.neutral3}`,
    borderRadius: '16px',
    padding: '24px',
    transition: 'all 0.3s ease',
    cursor: 'pointer',
    position: 'relative' as const,
    overflow: 'hidden',
  },
  cardHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '16px',
  },
  cardIcon: {
    fontSize: '24px',
    padding: '8px',
    backgroundColor: Colors.neutral3,
    borderRadius: '8px',
  },
  trendIndicator: {
    width: '8px',
    height: '8px',
    borderRadius: '50%',
    animation: 'pulse 2s infinite',
  },
  cardTitle: {
    fontSize: '14px',
    fontWeight: '600',
    color: Colors.neutral6,
    margin: '0 0 8px 0',
    textTransform: 'uppercase' as const,
    letterSpacing: '0.5px',
  },
  cardValue: {
    fontSize: '28px',
    fontWeight: '700',
    color: Colors.neutral8,
    margin: 0,
  },

  // Chart Section
  chartSection: {
    marginTop: '32px',
  },
  chartContainer: {
    backgroundColor: Colors.neutral2,
    border: `1px solid ${Colors.neutral3}`,
    borderRadius: '16px',
    padding: '32px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
  },
  chartHeader: {
    marginBottom: '24px',
    textAlign: 'center' as const,
  },
  chartTitle: {
    fontSize: '24px',
    fontWeight: '700',
    color: Colors.neutral8,
    margin: '0 0 8px 0',
  },
  chartContent: {
    backgroundColor: Colors.neutral1,
    borderRadius: '12px',
    padding: '16px',
    border: `1px solid ${Colors.neutral3}`,
  },
};

