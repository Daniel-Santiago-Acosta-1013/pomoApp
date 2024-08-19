import React, { useState } from 'react';
import { View, Button } from 'react-native';
import { Timer } from '../components/Timer';
import { SettingsModal } from '../components/SettingsModal';
import { OptionsModal } from '../components/OptionsModal';

export const HomeScreen = () => {
    const [isSettingsVisible, setSettingsVisible] = useState(false);
    const [isOptionsVisible, setOptionsVisible] = useState(false);

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Timer />
            <Button title="Ajustes" onPress={() => setSettingsVisible(true)} />
            <Button title="Opciones" onPress={() => setOptionsVisible(true)} />

            <SettingsModal
                visible={isSettingsVisible}
                onClose={() => setSettingsVisible(false)}
            />
            <OptionsModal
                visible={isOptionsVisible}
                onClose={() => setOptionsVisible(false)}
            />
        </View>
    );
};
