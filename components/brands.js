import { useEffect, useState } from "react"
import { getBrands } from "../api_endpoint/api"
import { View, Text, SafeAreaView, FlatList, Image, TouchableOpacity } from "react-native"
import PageHeader from "./screenheader"

import {
    useNavigation,
    useRoute,
    useFocusEffect,
  } from "@react-navigation/native";



const  BrandsList = () =>  {
    const [brandslist, setbrandlist] = useState([])
    const navigation = useNavigation()
    useEffect(() => {
        getBrands().then((data) => data.json()).then((res) => {
            setbrandlist(res.data)
            console.log(res.data)
        })
    }, [])
    return (
        <>

            <SafeAreaView style={{
                flex: 1,
                backgroundColor: "#fff",
            }}>
                <View style={{
                    shadowColor: "#000000",
                    shadowOffset: {
                        width: 0,
                        height: 1,
                    },
                    shadowOpacity: 0.16,
                    shadowRadius: 1.51,
                    elevation: 2
                }}>

                    <PageHeader title="Brands" action={() => navigation.goBack()} />

                    <View style={{ padding: 16 }}>
                        <FlatList
                            data={brandslist}
                            renderItem={({ item }) => {
                                return (
                                    <>
                                        <TouchableOpacity
                                                 onPress={ () => navigation.navigate('seriesList',{
                                                 brandid:item.id
                                                 })}

                                         style={{
                                            width: 110,

                                            // paddingHorizontal: 7,
                                            height: 90,
                                            // backgroundColor:'red',
                                            overflow: 'visible',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            marginLeft: 5,
                                            // padding: 10,
                                            shadowColor: "#000",
                                            shadowOffset: {
                                              width: 0,
                                              height: 2,
                                            },
                                            shadowOpacity: 0.25,
                                            shadowRadius: 3.84,
                                            elevation: 5,
                                            // backgroundColor: '#000',
                                            // height:140,
                                            // flexDirection:'column',
                                            borderRadius: 8,
                                            // overflow: 'hidden',
                                            // marginBottom: 14,
                                            padding:0,
                                            
                                            // borderColor: '#000',
                                            borderRadius: 10,
                                            // borderWidth: 1,

                                        }} 
                                        >
                                            <View style={{ position: "absolute" ,
                                            
                                             



                                            }}>
                                                <Image
                                                    source={{ uri: `${item.image_path}` }}
                                                    style={{ height: 50, width: "100%" }}
                                                    resizeMode="contain" />
                                                <Text style={{ color: '#000', fontWeight: '600' }}>{item?.name}</Text>
                                            </View>
                                        </TouchableOpacity>
                                    </>
                                )
                            }}
                            keyExtractor={(item) => item.id}
                            columnWrapperStyle={{
                                flexDirection: 'row',
                                marginHorizontal: -6,
                                paddingTop: 3,
                                padding: 10
                            }}
                            numColumns={3}
                        />
                    </View>
                </View>
            </SafeAreaView>

        </>
    )
}

export default BrandsList