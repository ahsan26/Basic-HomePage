import React from "react";
export default _ => {
    return (
        <div style={styles.container}>
            <p style={styles.informer}>Stay informed with our newsletter</p>
            <form action="JavaScript:void(0)">
                <input placeholder="Your Email" type="text" style={styles.input} />
                <button style={styles.btn}>Subscribe</button>
            </form>
        </div>
    );
};
const styles = {
    container: {
        backgroundColor: 'rgba(0,0,0,0.8)',
        color: '#fff',
        width: '100%',
        padding: '100px 0px',
        textAlign: 'center',
        marginTop:70
    },
    informer: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    input: {
        width: 300,
        color: 'black',
        padding: 8
    },
    btn: {
        backgroundColor: 'lightgrey',
        width: 200,
        height: 40,
        border: 0,
        color: 'black',
        letterSpacing: 2
    }
};