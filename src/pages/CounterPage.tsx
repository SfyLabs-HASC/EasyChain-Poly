import React from 'react';
import { useRpcCounter } from '../context/RpcCounterContext';

// Stili aggiornati per garantire la visibilità
const pageStyles: React.CSSProperties = {
  padding: '2rem',
  fontFamily: 'sans-serif',
  textAlign: 'center',
  backgroundColor: '#2d3748', // Un grigio-blu meno scuro per lo sfondo
  minHeight: '100vh',
};

const containerStyles: React.CSSProperties = {
    maxWidth: '800px',
    margin: '0 auto',
};

const headingStyles: React.CSSProperties = {
    color: '#ffffff', // Titolo esplicitamente bianco
};

const paragraphStyles: React.CSSProperties = {
    color: '#e2e8f0', // Paragrafi bianco-grigio chiaro
    lineHeight: 1.6,
};

const counterStyles: React.CSSProperties = {
  fontSize: '5rem',
  fontWeight: 'bold',
  color: '#60a5fa', // Contatore di un blu acceso per risaltare
  margin: '2rem 0',
  lineHeight: 1,
};

const buttonStyles: React.CSSProperties = {
  padding: '0.75rem 1.5rem',
  fontSize: '1rem',
  backgroundColor: '#3b82f6',
  color: 'white',
  border: 'none',
  borderRadius: '8px',
  cursor: 'pointer',
  marginTop: '1rem',
};

export default function CounterPage() {
  const { rpcCount, resetRpcCount } = useRpcCounter();

  return (
    <div style={pageStyles}>
      <div style={containerStyles}>
        <h1 style={headingStyles}>Contatore Chiamate RPC</h1>
        <p style={paragraphStyles}>Questo contatore traccia tutte le richieste di lettura on-chain (RPC Read Calls) effettuate dall'applicazione da quando è stata caricata o dall'ultimo reset.</p>
        <p style={paragraphStyles}>È uno strumento utile per capire quante richieste vengono fatte alla blockchain durante la navigazione e l'uso delle varie funzionalità.</p>
        
        <div style={counterStyles}>
          {rpcCount}
        </div>

        <button style={buttonStyles} onClick={resetRpcCount}>
          Azzera Contatore
        </button>
      </div>
    </div>
  );
}
