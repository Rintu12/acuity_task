import React, { useEffect } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

function PageHeader({ action, title }) {


    const styles = StyleSheet.create({
        upBlock: {
            flexDirection: 'row',
            alignItems: 'center',
            padding: 13,
            // marginTop:20


        },
        title: {
            fontSize: 16,
            color: '#000000',
            fontWeight: '700',
            paddingLeft: 5
        }

    });

    return (
        <View style={{ marginTop: 20 ,flexDirection:'row',justifyContent:'space-between',
        width:Dimensions.get('screen').width,
        padding:8,
    
        
        }}>
            <View style={styles.upBlock}>
                <TouchableOpacity onPress={action} style={{}}>
                    <Ionicons name="arrow-back" color="#000" size={30} />
                </TouchableOpacity>
                <Text style={styles.title} numberOfLines={1}>{title}</Text>
                <View></View>
            </View>

            <TouchableOpacity style={{position:'relative',justifyContent:'center',alignItems:'center'}}>
                <Ionicons name='search-circle-outline' color='#000' size={30} />
            </TouchableOpacity>

        </View>
    )
}

export default PageHeader;