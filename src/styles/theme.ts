import { StyleSheet } from 'react-native';

export const theme = {
  colors: {
    focus: '#d32f2f',
    shortBreak: '#388e3c',
    longBreak: '#1976d2',
    background: '#f5f5f5',
    darkBackground: '#212121',
    text: '#212121',
    darkText: '#f5f5f5',
    button: '#f5f5f5',
    darkButton: '#212121',
  },
  spacing: {
    small: 8,
    medium: 16,
    large: 24,
  },
  fontSize: {
    small: 12,
    medium: 18,
    large: 24,
    xlarge: 32,
  },
};

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: theme.spacing.medium,
    backgroundColor: theme.colors.background,
  },
  text: {
    color: theme.colors.text,
    fontSize: theme.fontSize.medium,
  },
  button: {
    padding: theme.spacing.small,
    backgroundColor: theme.colors.button,
  },
});
