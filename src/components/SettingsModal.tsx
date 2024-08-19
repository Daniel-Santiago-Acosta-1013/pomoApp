import React from 'react';
import { Modal, View, Text, Button, Switch } from 'react-native';

interface SettingsModalProps {
    visible: boolean;
    onClose: () => void;
}

export const SettingsModal: React.FC<SettingsModalProps> = ({ visible, onClose }) => {
    return (
        <Modal visible={visible} animationType="slide">
            <View style={{ padding: 20 }}>
                <Text>Ajustes</Text>
                <Switch value={false} />
                <Button title="Cerrar" onPress={onClose} />
            </View>
        </Modal>
    );
};
