import { StyleSheet } from 'react-native';

const mainStyles = { 
    container_all_centered:{
        width: '100%',
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        height: "100%"
    },
    bg_image_container:{
        width: '100%',
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        height: "100%",
        padding:20,
        resizeMode: 'contain'
    },
    white_text_container:{
        backgroundColor:"rgba(255, 255, 255, 1)",
        borderStyle:"solid",
        borderColor:"#999",
        borderWidth:1,
        borderRadius:10,
        padding:15,
        resizeMode: 'stretch'
    },
    white_textfield:{
        backgroundColor:"rgba(255, 255, 255, 1)",
        borderStyle:"solid",
        borderColor:"#999",
        borderWidth:1,
        borderRadius:10,
        padding:15,
        width:"100%"
    },
    primaryButton:{
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        borderStyle:"solid",
        borderColor:"#22C1CB",
        borderWidth:2,
        backgroundColor:"#7DF7FF",
        width:"100%",
        borderRadius:10,
        padding:15,
    },
    grayButton:{
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        borderStyle:"solid",
        borderColor:"#243185",
        borderWidth:1,
        backgroundColor:"#DFDFDF",
        width:"100%",
        borderRadius:10,
        padding:15,
    },
    whiteBoxText:{
        fontSize:16,
        color:"#8B8B8B"
    },
    whiteBoxTextBlue:{
        fontSize:16,
        color:"#243185",
        textAlign:"center"
    },
    blueLink:{
        fontSize:16,
        color:"#243185",
        textAlign:"center"
    },
    mt_10:{
        marginTop:10
    },
    mb_10:{
        marginBottom:10
    },
    mt_5:{
        marginTop:5
    },
    mb_5:{
        marginBottom:5
    }
    
};


export default mainStyles;