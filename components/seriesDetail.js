



import { useEffect, useState } from "react"
import { getBrands, getSeriesByBrands, getserieslistBySeriesid } from "../api_endpoint/api"
import { View, Text, SafeAreaView, FlatList, Image, TouchableOpacity } from "react-native"
import PageHeader from "./screenheader"
import { useRoute } from "@react-navigation/native"



function SeriesDetails({ navigation }) {
    const [serieslist, setserieslist] = useState([])
  const  route = useRoute()
    useEffect(() => {
        getserieslistBySeriesid(route?.params?.seriesid).then((res) => res.json()).then((data) =>{
            setserieslist(data.data)
        })
    }, [route?.params?.seriesid])
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

                    <PageHeader title="Select Brand" action={() => navigation.goBack()} />

                    <View style={{ padding: 16 }}>
                        <View>
                            {
                                serieslist.length === 0 ? <Text>No Brand Aviable</Text>  : null                           }
                        </View>
                        <FlatList
                            data={serieslist}
                            renderItem={({ item }) => {
                                return (
                                    <>
                                        <TouchableOpacity style={{
                                            width: 110,

                                            // paddingHorizontal: 7,
                                            height: 90,
                                            // backgroundColor:'red',
                                            overflow: 'visible',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            marginLeft: 5,
                                            padding: 10,
                                            borderColor: '#000',
                                            borderRadius: 30,
                                            borderWidth: 1,

                                        }}>
                                            <View style={{ position: "absolute" }}>
                                                {/* <Image
                                                    source={{ uri: `${item.image_path}` }}
                                                    style={{ height: 50, width: "100%" }}
                                                    resizeMode="contain" /> */}
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

export default SeriesDetails;