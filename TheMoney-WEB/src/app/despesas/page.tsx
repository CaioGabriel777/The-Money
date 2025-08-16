import { Colors } from "@/constants/Colors";

export default function despesasScreen() {
    return(
        <div style={styles.container}>
            <h1>Despesas</h1>
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