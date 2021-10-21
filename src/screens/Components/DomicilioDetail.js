import React from 'react';
import MapComponent from './MapComponent';
import { View, Text, StyleSheet, ImageBackground, Image } from 'react-native';
import mainStyles from './main.css';
import DomRectListChildStyles from './DomRectListChild.css';
import MainBottomBar from './Includes/MainBottomBar/MainBottomBar';
import DomicilioDetailStyles from './DomicilioDetail.css';

// const DomicilioDetail = ()=>{

// }

const DomicilioDetail = (props)=>{
    return (
      <ImageBackground style = {[ styles.bg_image_container, { padding:0, margin:0 } ]} source = { require('./assets/backgroundApp/backgroundApp.png') } >
      <View style = { [ styles.containerViewWithBottomNav, { backgroundColor:'white' } ] } >
        
          <View style = { [styles.containerContentOverBottomBar, { padding:0 }] } >

            <View style = { { height:60, paddingHorizontal:15, backgroundColor:'white', alignItems:'center', justifyContent:'flex-start', flexDirection:'row' } } >
              <Text style = { styles.title } >DOM No. 458964</Text>
            </View>

            <MapComponent />

            <View style = { styles.standartPaddingH_2 } >
              <View style = { [ styles.containerEstado, { paddingVertical: 10 } ] } >
                <Text style = { [ styles.title, { width: 100 } ] } >Estado:</Text>
                <View style = { { width:1, backgroundColor:"gray", height:50 } } ></View>
                <View style = { { flex:1, justifyContent:"center", alignItems:"center" } } >
                  <Image source = { require('./assets/estado_en_camino/estado_en_camino.png') } />
                  <Text style = { [ styles.grayLightNormalText, styles.mt_5 ] } >En Camino</Text>
                </View>               
              </View>

              <View style = { styles.longLine } />

              <View style = {{ paddingVertical: 10 }} >
                <Text style = { styles.title } >Dirección de Entrega:</Text>
                <Text style = { styles.grayLightNormalText } >Carrera 24 # 71A - 22 Manuela Beltrán</Text>
              </View>

              <View style = { styles.longLine } />

              <View style = {{ paddingVertical: 10 }}>
                <Text style = { styles.title } >Formulas:</Text>
                <Text style = { styles.grayLightNormalText } >31458, 59874, 46298, 46857</Text>
              </View>

              <View style = { styles.longLine } />

              <View style = {{ paddingVertical: 10 }}>
                <Text style = { styles.title } >Nombre Paciente:</Text>
                <Text style = { styles.grayLightNormalText } >Andrés Fernando Rodríguez</Text>
              </View>

              <View style = { styles.longLine } />

              <View style = {{ paddingVertical: 10 }}>
                <Text style = { styles.title } >Teléfono:</Text>
                <Text style = { styles.grayLightNormalText } >315 875 6832</Text>
              </View>            
            </View>

          </View>

          <MainBottomBar props = { props } />
      </View>
      </ImageBackground>      
    );
}

const styles = StyleSheet.create({
  ...mainStyles, ...DomRectListChildStyles, ...DomicilioDetailStyles
})

export default DomicilioDetail;