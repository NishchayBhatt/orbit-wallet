import { useThemeColor } from "@/hooks/useThemeColor";
import { TextInput, TextInputProps, View } from "react-native";

export type ThemedTextInputProps = TextInputProps & {
    lightColor?: string;
    darkColor?: string;
}
export function ThemedTextInput({ style, lightColor, darkColor, ...otherProps }: ThemedTextInputProps) {
    const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, 'background');
    const placeholderTextColor = useThemeColor({ light: lightColor, dark: darkColor }, 'tabIconDefault');
    const borderColor = useThemeColor({ light: lightColor, dark: darkColor }, 'tabIconDefault');

    return <View style={[{ backgroundColor, borderColor: borderColor, width: "100%", padding: 20, borderWidth: 1 }, style]}>
        <TextInput {...otherProps} placeholderTextColor={placeholderTextColor} />
    </View>
}
