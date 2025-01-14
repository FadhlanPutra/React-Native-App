import { Image, ImageBackground, ScrollView, Text, View } from 'react-native';
import tw from "twrnc";

// import { HelloWave } from '@/components/HelloWave';
// import ParallaxScrollView from '@/components/ParallaxScrollView';
// import { ThemedText } from '@/components/ThemedText';
// import { ThemedView } from '@/components/ThemedView';
import { Link } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import React from 'react';

export default function Project() {
    return(

        <SafeAreaView>
            <ScrollView>

                <Text style={tw`text-center font-extrabold text-4xl mx-5`}>Karya Terbaik RPL 2 😎😎</Text>

                <View style={tw`mx-5 opacity-80`}>
                    
                <Link href="/settings/detail" style={tw`my-5`}>
                        <ImageBackground source={require('../../assets/images/kurangInpo.jpg')} style={tw`w-full h-50 my-5 rounded-lg`}>
                            <View style={tw`absolute inset-0 bg-black opacity-30 rounded-lg`} />
                            <View style={tw`p-5`}>
                                <Text style={tw`font-extrabold text-xl text-white mt-30`}>Pencapaian</Text>
                                <Text style={tw`text-lg text-white`}>Dahulu kala, pada......</Text>
                            </View>
                        </ImageBackground>
                    </Link>

                    <Link href="/settings/detail" style={tw`my-5`}>
                        <ImageBackground source={require('../../assets/images/kurangInpo.jpg')} style={tw`w-full h-50 my-5 rounded-lg`}>
                            <View style={tw`absolute inset-0 bg-black opacity-30 rounded-lg`} />
                            <View style={tw`p-5`}>
                                <Text style={tw`font-extrabold text-xl text-white mt-30`}>Pencapaian</Text>
                                <Text style={tw`text-lg text-white`}>Dahulu kala, pada......</Text>
                            </View>
                        </ImageBackground>
                    </Link>

                    <Link href="/settings/detail" style={tw`my-5`}>
                        <ImageBackground source={require('../../assets/images/kurangInpo.jpg')} style={tw`w-full h-50 my-5 rounded-lg`}>
                            <View style={tw`absolute inset-0 bg-black opacity-30 rounded-lg`} />
                            <View style={tw`p-5`}>
                                <Text style={tw`font-extrabold text-xl text-white mt-30`}>Pencapaian</Text>
                                <Text style={tw`text-lg text-white`}>Dahulu kala, pada......</Text>
                            </View>
                        </ImageBackground>
                    </Link>

                    <Link href="/settings/detail" style={tw`my-5`}>
                        <ImageBackground source={require('../../assets/images/kurangInpo.jpg')} style={tw`w-full h-50 my-5 rounded-lg`}>
                            <View style={tw`absolute inset-0 bg-black opacity-30 rounded-lg`} />
                            <View style={tw`p-5`}>
                                <Text style={tw`font-extrabold text-xl text-white mt-30`}>Pencapaian</Text>
                                <Text style={tw`text-lg text-white`}>Dahulu kala, pada......</Text>
                            </View>
                        </ImageBackground>
                    </Link>

                    <Link href="/settings/detail" style={tw`my-5`}>
                        <ImageBackground source={require('../../assets/images/kurangInpo.jpg')} style={tw`w-full h-50 my-5 rounded-lg`}>
                            <View style={tw`absolute inset-0 bg-black opacity-30 rounded-lg`} />
                            <View style={tw`p-5`}>
                                <Text style={tw`font-extrabold text-xl text-white mt-30`}>Pencapaian</Text>
                                <Text style={tw`text-lg text-white`}>Dahulu kala, pada......</Text>
                            </View>
                        </ImageBackground>
                    </Link>

                    <Link href="/settings/detail" style={tw`my-5`}>
                        <ImageBackground source={require('../../assets/images/kurangInpo.jpg')} style={tw`w-full h-50 my-5 rounded-lg`}>
                            <View style={tw`absolute inset-0 bg-black opacity-30 rounded-lg`} />
                            <View style={tw`p-5`}>
                                <Text style={tw`font-extrabold text-xl text-white mt-30`}>Pencapaian</Text>
                                <Text style={tw`text-lg text-white`}>Dahulu kala, pada......</Text>
                            </View>
                        </ImageBackground>
                    </Link>

                    <Link href="/settings/detail" style={tw`my-5`}>
                        <ImageBackground source={require('../../assets/images/kurangInpo.jpg')} style={tw`w-full h-50 my-5 rounded-lg`}>
                            <View style={tw`absolute inset-0 bg-black opacity-30 rounded-lg`} />
                            <View style={tw`p-5`}>
                                <Text style={tw`font-extrabold text-xl text-white mt-30`}>Pencapaian</Text>
                                <Text style={tw`text-lg text-white`}>Dahulu kala, pada......</Text>
                            </View>
                        </ImageBackground>
                    </Link>

                    <Link href="/settings/detail" style={tw`my-5`}>
                        <ImageBackground source={require('../../assets/images/kurangInpo.jpg')} style={tw`w-full h-50 my-5 rounded-lg`}>
                            <View style={tw`absolute inset-0 bg-black opacity-30 rounded-lg`} />
                            <View style={tw`p-5`}>
                                <Text style={tw`font-extrabold text-xl text-white mt-30`}>Pencapaian</Text>
                                <Text style={tw`text-lg text-white`}>Dahulu kala, pada......</Text>
                            </View>
                        </ImageBackground>
                    </Link>

                </View>

            </ScrollView>
        </SafeAreaView>

    )};