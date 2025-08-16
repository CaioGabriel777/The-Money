import { Colors } from "@/constants/Colors";

export default function acoesScreen() {
    return(
        <div style={styles.container}>
            <h1>Ações</h1>
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