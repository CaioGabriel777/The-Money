import { Colors } from "@/constants/Colors";

export default function relatoriosScreen() {
    return(
        <div style={styles.container}>
            <h1>Relatórios</h1>
        </div>
    );
}

const styles = {
    container: {
        display: 'flex',
        minHeight: '100vh',
        backgroundColor: Colors.neutral1,
    },
};