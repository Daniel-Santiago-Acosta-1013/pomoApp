import React from 'react';
import { Modal, View, Text, Button } from 'react-native';

interface OptionsModalProps {
    visible: boolean;
    onClose: () => void;
}

export const OptionsModal: React.FC<OptionsModalProps> = ({ visible, onClose }) => {
    return (
        <Modal visible={visible} animationType="slide">
            <View style={{ padding: 20 }}>
                <Text>Opciones</Text>
                <Button title="Cerrar" onPress={onClose} />
            </View>
        </Modal>
    );
};
