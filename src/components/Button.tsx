import { useTheme } from "../contexts/ThemeContext";

export function Button() {
    const theme = useTheme();

    return (
        <button className={theme.currentTheme.button} />
    )

}