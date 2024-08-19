import React, { useContext } from 'react';
import { View, Text, Button } from 'react-native';
import { TimerContext } from '../context/TimerContext';

export const Timer = () => {
    const context = useContext(TimerContext);

    // Verifica si el contexto es undefined
    if (!context) {
        throw new Error("TimerContext debe ser usado dentro de un TimerProvider");
    }

    const { time, isRunning, startTimer, pauseTimer, resetTimer } = context;

    return (
        <View>
            <Text style={{ fontSize: 48 }}>{`${Math.floor(time / 60)}:${(time % 60).toString().padStart(2, '0')}`}</Text>
            <Button title={isRunning ? "Pausar" : "Iniciar"} onPress={isRunning ? pauseTimer : startTimer} />
            <Button title="Resetear" onPress={resetTimer} />
        </View>
    );
};
