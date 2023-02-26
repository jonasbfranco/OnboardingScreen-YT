import React, { useState } from 'react'
import { View, Text, Image } from 'react-native'
import AppIntroSlider from 'react-native-app-intro-slider'

import { StatusBar } from 'expo-status-bar';

import { COLORS, SIZES } from '../constants/theme';
import { useNavigation } from '@react-navigation/native';
import { StackActions } from '@react-navigation/native';

const slides = [
    {
        id: 1,
        title: 'Bem vindo!',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        image: require('../assets/img/bem_vindo.png'),
    },
    {
        id: 2,
        title: 'Tudo que precisa.',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        image: require('../assets/img/selecione_produtos.png'),
    },
    {
        id: 3,
        title: 'Boas compras!',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        image: require('../assets/img/boas_compras.png'),
    },
]


// fazer a interface do label

const Onboarding = () => {

    const [showHome, setShowHome] = useState(false);

    const navigation = useNavigation();


    const buttonLabel = (label) => {
        return (
            <View style={{
                width: 100,
                height: 40,
                justifyContent: 'center',
                alignItems: 'center',
                borderColor: COLORS.title,
                borderWidth: 1,
                backgroundColor: COLORS.title,
                borderRadius: 8,
            }}>
                <Text style={{
                    color: COLORS.white,
                    letterSpacing: 0.3,
                    fontWeight: 'bold',
                }}>
                    {label}
                </Text>
            </View>
        )
    }

    const buttonLabelSkip = (label) => {
        return (
            <View style={{
                width: 100,
                height: 40,
                justifyContent: 'center',
                alignItems: 'center',
                borderColor: COLORS.title,
                borderWidth: 1,
                backgroundColor: 'transparent',
                borderRadius: 8,
            }}>
                <Text style={{
                    color: COLORS.title,
                    letterSpacing: 0.3,
                    fontWeight: 'bold',
                }}>
                    {label}
                </Text>
            </View>
        )
    }

    if (!showHome) {
        return (
        <>

            <StatusBar style="dark" />


            <AppIntroSlider 
                data={slides}
                renderItem={({ item }) => {
                    return (
                        <View style={{
                            flex: 1,
                            justifyContent: 'center',
                            alignItems: 'center',
                            backgroundColor: 'white',
                            paddingHorizontal: 20,
                            paddingBottom: 10,
                        }}>
                            <Image 
                                source={item.image} 
                                style={{
                                    width: SIZES.width - 30,
                                    height: 300,
                                }} 
                                resizeMode='contain'
                            />
                            <Text style={{
                                fontWeight: 'bold',
                                color: COLORS.title,
                                fontSize: SIZES.h1,
                                paddingTop: 10,
                            }}>
                                {item.title}
                            </Text>
                            <Text style={{
                                textAlign: 'center',
                                paddingTop: 10,
                                paddingBottom: 20,
                                color: COLORS.title,
                            }}>
                                {item.description}
                            </Text>
                        </View>
                    )
                }}

                activeDotStyle={{
                    backgroundColor: COLORS.primary,
                    width: 30,
                }}
                
                showSkipButton
                renderNextButton={() => buttonLabel('Próximo')}
                renderSkipButton={() => buttonLabelSkip('Pular')}
                renderDoneButton={() => buttonLabel('Começar')}
                onDone={() => navigation.dispatch(
                    StackActions.replace('Home')
                    )}
            />

        </>
        )
    }

}

export default Onboarding