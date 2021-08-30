import React, { useCallback } from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import ChatBot from 'react-native-chatbot';

const CadastrarAvaliacao = ({navigation}) => {

  const constSteps = [
      {
        id:'0',
        message:'Olá, seja bem-vindo a avaliação de calçadas de Santa maria! Informe o CEP:',
        trigger:'1',
      },
      {
        id:'1',
        user:true,
        trigger:'2'
      },
      {
        id:'2',
        message:'Informe seu email:',
        trigger:'3',
      },
      {
        id:'3',
        user:true,
        trigger:'4'
      },

      {
        id:'4',
        message:'A calçada está pavimentada?',
        trigger:'5',
      },
      {
        id: '5',
        metadata: {
          code: 1,
        },
        options: [
          { value: 'SIM, TOTALMENTE', label: 'SIM, TOTALMENTE', trigger: '9' },
          { value: 'SIM, NA MAIOR PARTE', label: 'SIM, NA MAIOR PARTE', trigger: '9' },
          { value: 'SIM, NA MENOR PARTE', label: 'SIM, NA MENOR PARTE', trigger: '9' },
          { value: 'NÃO', label: 'NÃO', trigger: '13' },
          { value: 'NÃO TENHO CERTEZA', label: 'NÃO TENHO CERTEZA', trigger: '13' },
        ], 
       },
       {
         id:'9',
         message:'O pavimento da calçada é regular e firme, sem buracos?',
         trigger: '10',
       },
       {
        id: '10',
        metadata: {
          code: 2,
        },
        options: [
          { value: 'SIM, TOTALMENTE', label: 'SIM, TOTALMENTE', trigger: '11' },
          { value: 'SIM, NA MAIOR PARTE', label: 'SIM, NA MAIOR PARTE', trigger: '11' },
          { value: 'SIM, NA MENOR PARTE', label: 'SIM, NA MENOR PARTE', trigger: '11' },
          { value: 'NÃO', label: 'NÃO', trigger: '11' },
          { value: 'NÃO TENHO CERTEZA', label: 'NÃO TENHO CERTEZA', trigger: '11' },
        ], 
       },
       {
        id:'11',
        message:'O pavimento da calçada é antiderrapante?',
        trigger: '12',
      },
      {
        id: '12',
        metadata: {
          code: 3,
        },
        options: [
          { value: 'SIM, TOTALMENTE', label: 'SIM, TOTALMENTE', trigger: '13' },
          { value: 'SIM, NA MAIOR PARTE', label: 'SIM, NA MAIOR PARTE', trigger: '13' },
          { value: 'SIM, NA MENOR PARTE', label: 'SIM, NA MENOR PARTE', trigger: '13' },
          { value: 'NÃO', label: 'NÃO', trigger: '13' },
          { value: 'NÃO TENHO CERTEZA', label: 'NÃO TENHO CERTEZA', trigger: '13' },
        ], 
       },
    {
        id: '13',
        message: 'Há degraus ou desníveis na calçada?',
        trigger: '14',
    },
    {
        id: '14',
        metadata: {
          code: 4,
        },
        options: [
          { value: 'SIM, TOTALMENTE', label: 'SIM, TOTALMENTE', trigger: '15' },
          { value: 'SIM, NA MAIOR PARTE', label: 'SIM, NA MAIOR PARTE', trigger: '15' },
          { value: 'SIM, NA MENOR PARTE', label: 'SIM, NA MENOR PARTE', trigger: '15' },
          { value: 'NÃO', label: 'NÃO', trigger: '21' },
          { value: 'NÃO TENHO CERTEZA', label: 'NÃO TENHO CERTEZA', trigger: '21' },
        ], 
       },
       {
        id: '15',
        message: 'Quando há degraus ou desníveis eles são no máximo 0,5cm?',
        trigger: '16',
    },
    {
        id: '16',
        metadata: {
          code: 5,
        },
        options: [
          { value: 'SIM, TOTALMENTE', label: 'SIM, TOTALMENTE', trigger: '17' },
          { value: 'SIM, NA MAIOR PARTE', label: 'SIM, NA MAIOR PARTE', trigger: '17' },
          { value: 'SIM, NA MENOR PARTE', label: 'SIM, NA MENOR PARTE', trigger: '17' },
          { value: 'NÃO', label: 'NÃO', trigger: '19' },
          { value: 'NÃO TENHO CERTEZA', label: 'NÃO TENHO CERTEZA', trigger: '19' },
        ], 
       },
       {
        id: '17',
        message: 'Quando há degraus ou desníveis, eles são entre 0,5cm e 2cm?',
        trigger: '18',
    },
    {
        id: '18',
        metadata: {
          code: 6,
        },
        options: [
          { value: 'SIM, TOTALMENTE', label: 'SIM, TOTALMENTE', trigger: '19' },
          { value: 'SIM, NA MAIOR PARTE', label: 'SIM, NA MAIOR PARTE', trigger: '19' },
          { value: 'SIM, NA MENOR PARTE', label: 'SIM, NA MENOR PARTE', trigger: '19' },
          { value: 'NÃO', label: 'NÃO', trigger: '21' },
          { value: 'NÃO TENHO CERTEZA', label: 'NÃO TENHO CERTEZA', trigger: '21' },
        ], 
       },
       {
        id: '19',
        message: 'Quando há degraus ou desníveise de 0,5cm a 2cm, há uma rampa com até 50% de inclinação?',
        trigger: '20',
    },
    {
        id: '20',
        metadata: {
          code: 7,
        },
        options: [
          { value: 'SIM, TOTALMENTE', label: 'SIM, TOTALMENTE', trigger: '21' },
          { value: 'SIM, NA MAIOR PARTE', label: 'SIM, NA MAIOR PARTE', trigger: '21' },
          { value: 'SIM, NA MENOR PARTE', label: 'SIM, NA MENOR PARTE', trigger: '21' },
          { value: 'NÃO', label: 'NÃO', trigger: '21' },
          { value: 'NÃO TENHO CERTEZA', label: 'NÃO TENHO CERTEZA', trigger: '21' },
        ], 
       },
       {
        id: '21',
        message: 'A calçada possui inclinações transversais?',
        trigger: '22',
    },
    {
        id: '22',
        metadata: {
          code: 8,
        },
        options: [
          { value: 'SIM, TOTALMENTE', label: 'SIM, TOTALMENTE', trigger: '23' },
          { value: 'SIM, NA MAIOR PARTE', label: 'SIM, NA MAIOR PARTE', trigger: '23' },
          { value: 'SIM, NA MENOR PARTE', label: 'SIM, NA MENOR PARTE', trigger: '23' },
          { value: 'NÃO', label: 'NÃO', trigger: '25' },
          { value: 'NÃO TENHO CERTEZA', label: 'NÃO TENHO CERTEZA', trigger: '25' },
        ], 
       },
       {
        id: '23',
        message: 'As inclinações transversais são de no máximo 3%?',
        trigger: '24',
    },
    {
        id: '24',
        metadata: {
          code: 9,
        },
        options: [
          { value: 'SIM, TOTALMENTE', label: 'SIM, TOTALMENTE', trigger: '25' },
          { value: 'SIM, NA MAIOR PARTE', label: 'SIM, NA MAIOR PARTE', trigger: '25' },
          { value: 'SIM, NA MENOR PARTE', label: 'SIM, NA MENOR PARTE', trigger: '25' },
          { value: 'NÃO', label: 'NÃO', trigger: '25' },
          { value: 'NÃO TENHO CERTEZA', label: 'NÃO TENHO CERTEZA', trigger: '25' },
        ], 
       },
       {
        id: '25',
        message: 'A calçada acompanha a inclinação longitudinal da via?',
        trigger: '26',
    },
    {
        id: '26',
        metadata: {
          code: 10,
        },
        options: [
          { value: 'SIM, TOTALMENTE', label: 'SIM, TOTALMENTE', trigger: '27' },
          { value: 'SIM, NA MAIOR PARTE', label: 'SIM, NA MAIOR PARTE', trigger: '27' },
          { value: 'SIM, NA MENOR PARTE', label: 'SIM, NA MENOR PARTE', trigger: '27' },
          { value: 'NÃO', label: 'NÃO', trigger: '27' },
          { value: 'NÃO TENHO CERTEZA', label: 'NÃO TENHO CERTEZA', trigger: '27' },
        ], 
       },
       {
        id: '27',
        message: 'A calçada possui faixa livre para circulação de pedestres com largura mínima de 1,20m?',
        trigger: '28',
    },
    {
        id: '28',
        metadata: {
          code: 11,
        },
        options: [
          { value: 'SIM, TOTALMENTE', label: 'SIM, TOTALMENTE', trigger: '29' },
          { value: 'SIM, NA MAIOR PARTE', label: 'SIM, NA MAIOR PARTE', trigger: '29' },
          { value: 'SIM, NA MENOR PARTE', label: 'SIM, NA MENOR PARTE', trigger: '29' },
          { value: 'NÃO', label: 'NÃO', trigger: '29' },
          { value: 'NÃO TENHO CERTEZA', label: 'NÃO TENHO CERTEZA', trigger: '29' },
        ], 
       },
       
       {
        id: '29',
        message: 'Há obstáculos verticais, tais como placas, beirais, ramos de árvores?',
        trigger: '30',
    },
  
    {
        id: '30',
        metadata: {
          code: 12,
        },
        options: [
          { value: 'SIM, TOTALMENTE', label: 'SIM, TOTALMENTE', trigger: '31' },
          { value: 'SIM, NA MAIOR PARTE', label: 'SIM, NA MAIOR PARTE', trigger: '31' },
          { value: 'SIM, NA MENOR PARTE', label: 'SIM, NA MENOR PARTE', trigger: '31' },
          { value: 'NÃO', label: 'NÃO', trigger: '33' },
          { value: 'NÃO TENHO CERTEZA', label: 'NÃO TENHO CERTEZA', trigger: '33' },
        ], 
       },
  
       {
        id: '31',
        message: 'A altura livre de obstáculos da calçada é de no mínimo 2,10m?',
        trigger: '32',
    },
  
    {
        id: '32',
        metadata: {
          code: 13,
        },
        options: [
          { value: 'SIM, TOTALMENTE', label: 'SIM, TOTALMENTE', trigger: '33' },
          { value: 'SIM, NA MAIOR PARTE', label: 'SIM, NA MAIOR PARTE', trigger: '33' },
          { value: 'SIM, NA MENOR PARTE', label: 'SIM, NA MENOR PARTE', trigger: '33' },
          { value: 'NÃO', label: 'NÃO', trigger: '33' },
          { value: 'NÃO TENHO CERTEZA', label: 'NÃO TENHO CERTEZA', trigger: '33' },
        ], 
       },
  
       {
        id: '33',
        message: 'Há mobiliário urbano(canteiros, bancos, lixeiras, etc) na calçada?',
        trigger: '34',
    },
  
    {
        id: '34',
        metadata: {
          code: 14,
        },
        options: [
          { value: 'SIM, TOTALMENTE', label: 'SIM, TOTALMENTE', trigger: '35' },
          { value: 'SIM, NA MAIOR PARTE', label: 'SIM, NA MAIOR PARTE', trigger: '35' },
          { value: 'SIM, NA MENOR PARTE', label: 'SIM, NA MENOR PARTE', trigger: '35' },
          { value: 'NÃO', label: 'NÃO', trigger: '37' },
          { value: 'NÃO TENHO CERTEZA', label: 'NÃO TENHO CERTEZA', trigger: '37' },
        ], 
       },
  
       {
        id: '35',
        message: 'O mobiliário urbano encontra-se na faixa de serviço, fora da faixa livre de circulação de pedestres?',
        trigger: '36',
    },
    {
        id: '36',
        metadata: {
          code: 15,
        },
        options: [
          { value: 'SIM, TOTALMENTE', label: 'SIM, TOTALMENTE', trigger: '37' },
          { value: 'SIM, NA MAIOR PARTE', label: 'SIM, NA MAIOR PARTE', trigger: '37' },
          { value: 'SIM, NA MENOR PARTE', label: 'SIM, NA MENOR PARTE', trigger: '37' },
          { value: 'NÃO', label: 'NÃO', trigger: '37' },
          { value: 'NÃO TENHO CERTEZA', label: 'NÃO TENHO CERTEZA', trigger: '37' },
        ], 
       },
  
       {
        id: '37',
        message: 'Há árvores e vegetação na calçada?',
        trigger: '38',
    },
    {
        id: '38',
        metadata: {
          code: 16,
        },
        options: [
          { value: 'SIM, TOTALMENTE', label: 'SIM, TOTALMENTE', trigger: '39' },
          { value: 'SIM, NA MAIOR PARTE', label: 'SIM, NA MAIOR PARTE', trigger: '39' },
          { value: 'SIM, NA MENOR PARTE', label: 'SIM, NA MENOR PARTE', trigger: '39' },
          { value: 'NÃO', label: 'NÃO', trigger: '39' },
          { value: 'NÃO TENHO CERTEZA', label: 'NÃO TENHO CERTEZA', trigger: '39' },
        ], 
       },
  
       {
        id: '39',
        message: 'As árvores e vegetação encontram-se na faixa de serviço, fora da faixa livre de circulação de pedestres?',
        trigger: '40',
    },
    {
        id: '40',
        metadata: {
          code: 17,
        },
        options: [
          { value: 'SIM, TOTALMENTE', label: 'SIM, TOTALMENTE', trigger: '41' },
          { value: 'SIM, NA MAIOR PARTE', label: 'SIM, NA MAIOR PARTE', trigger: '41' },
          { value: 'SIM, NA MENOR PARTE', label: 'SIM, NA MENOR PARTE', trigger: '41' },
          { value: 'NÃO', label: 'NÃO', trigger: '41' },
          { value: 'NÃO TENHO CERTEZA', label: 'NÃO TENHO CERTEZA', trigger: '41' },
        ], 
       },
  
       {
        id: '41',
        message: 'As raízes, espinhos e outros elementos das árvores e vegetação encontram-se fora da faixa livre de circulação e das áreas de circulação de pedestres adjacentes?',
        trigger: '42',
    },
  
    {
        id: '42',
        metadata: {
          code: 18,
        },
        options: [
          { value: 'SIM, TOTALMENTE', label: 'SIM, TOTALMENTE', trigger: '43' },
          { value: 'SIM, NA MAIOR PARTE', label: 'SIM, NA MAIOR PARTE', trigger: '43' },
          { value: 'SIM, NA MENOR PARTE', label: 'SIM, NA MENOR PARTE', trigger: '43' },
          { value: 'NÃO', label: 'NÃO', trigger: '43' },
          { value: 'NÃO TENHO CERTEZA', label: 'NÃO TENHO CERTEZA', trigger: '43' },
        ], 
       },
  
       {
        id: '43',
        message: 'Há pontos de embarque e desembarque de transporte público na calçada?',
        trigger: '44',
    },
    {
        id: '44',
        metadata: {
          code: 19,
        },
        options: [
          { value: 'SIM, TOTALMENTE', label: 'SIM, TOTALMENTE', trigger: '45' },
          { value: 'SIM, NA MAIOR PARTE', label: 'SIM, NA MAIOR PARTE', trigger: '45' },
          { value: 'SIM, NA MENOR PARTE', label: 'SIM, NA MENOR PARTE', trigger: '45' },
          { value: 'NÃO', label: 'NÃO', trigger: '47' },
          { value: 'NÃO TENHO CERTEZA', label: 'NÃO TENHO CERTEZA', trigger: '47' },
        ], 
       },
  
       {
        id: '45',
        message: 'Os pontos de embarque e desembarque de transporte público encontram-se fora da faixa livre de circulação de pedestres?',
        trigger: '46',
    },
  
    {
        id: '46',
        metadata: {
          code: 20,
        },
        options: [
          { value: 'SIM, TOTALMENTE', label: 'SIM, TOTALMENTE', trigger: '47' },
          { value: 'SIM, NA MAIOR PARTE', label: 'SIM, NA MAIOR PARTE', trigger: '47' },
          { value: 'SIM, NA MENOR PARTE', label: 'SIM, NA MENOR PARTE', trigger: '47' },
          { value: 'NÃO', label: 'NÃO', trigger: '47' },
          { value: 'NÃO TENHO CERTEZA', label: 'NÃO TENHO CERTEZA', trigger: '47' },
        ], 
       },
  
       {
        id: '47',
        message: 'Há acesso de veículos aos lotes ou à estacionamentos na calçada?',
        trigger: '48',
    },
  
    {
        id: '48',
        metadata: {
          code: 21,
        },
        options: [
          { value: 'SIM, TOTALMENTE', label: 'SIM, TOTALMENTE', trigger: '49' },
          { value: 'SIM, NA MAIOR PARTE', label: 'SIM, NA MAIOR PARTE', trigger: '49' },
          { value: 'SIM, NA MENOR PARTE', label: 'SIM, NA MENOR PARTE', trigger: '49' },
          { value: 'NÃO', label: 'NÃO', trigger: '55' },
          { value: 'NÃO TENHO CERTEZA', label: 'NÃO TENHO CERTEZA', trigger: '55' },
        ], 
       },
  
       {
        id: '49',
        message: 'Os desníveis ocasiacionados pelo acesso de veículos encontram-se fora da faixa livre de circulação de pedestres?',
        trigger: '50',
    },
  
    {
        id: '50',
        metadata: {
          code: 22,
        },
        options: [
          { value: 'SIM, TOTALMENTE', label: 'SIM, TOTALMENTE', trigger: '51' },
          { value: 'SIM, NA MAIOR PARTE', label: 'SIM, NA MAIOR PARTE', trigger: '51' },
          { value: 'SIM, NA MENOR PARTE', label: 'SIM, NA MENOR PARTE', trigger: '51' },
          { value: 'NÃO', label: 'NÃO', trigger: '51' },
          { value: 'NÃO TENHO CERTEZA', label: 'NÃO TENHO CERTEZA', trigger: '51' },
        ], 
       },
  
       {
        id: '51',
        message: 'Há alarme, com sinalização sonora e visual, na saída de garagens e acesso de veículos?',
        trigger: '52',
    },
  
    {
        id: '52',
        metadata: {
          code: 23,
        },
        options: [
          { value: 'SIM, TOTALMENTE', label: 'SIM, TOTALMENTE', trigger: '53' },
          { value: 'SIM, NA MAIOR PARTE', label: 'SIM, NA MAIOR PARTE', trigger: '53' },
          { value: 'SIM, NA MENOR PARTE', label: 'SIM, NA MENOR PARTE', trigger: '53' },
          { value: 'NÃO', label: 'NÃO', trigger: '53' },
          { value: 'NÃO TENHO CERTEZA', label: 'NÃO TENHO CERTEZA', trigger: '53' },
        ], 
       },
  
       {
        id: '53',
        message: 'O portão de acesso a estacionamentos e garagem funciona sem interferir na faixa livre de circulação de pedestres?',
        trigger: '54',
    },
  
    {
        id: '54',
        metadata: {
          code: 24,
        },
        options: [
          { value: 'SIM, TOTALMENTE', label: 'SIM, TOTALMENTE', trigger: '55' },
          { value: 'SIM, NA MAIOR PARTE', label: 'SIM, NA MAIOR PARTE', trigger: '55' },
          { value: 'SIM, NA MENOR PARTE', label: 'SIM, NA MENOR PARTE', trigger: '55' },
          { value: 'NÃO', label: 'NÃO', trigger: '55' },
          { value: 'NÃO TENHO CERTEZA', label: 'NÃO TENHO CERTEZA', trigger: '55' },
        ], 
       },
  
       {
        id: '55',
        message: 'Há obras existentes sobre o passeio?',
        trigger: '56',
    },
  
    {
        id: '56',
        metadata: {
          code: 25,
        },
        options: [
          { value: 'SIM, TOTALMENTE', label: 'SIM, TOTALMENTE', trigger: '57' },
          { value: 'SIM, NA MAIOR PARTE', label: 'SIM, NA MAIOR PARTE', trigger: '57' },
          { value: 'SIM, NA MENOR PARTE', label: 'SIM, NA MENOR PARTE', trigger: '57' },
          { value: 'NÃO', label: 'NÃO', trigger: '59' },
          { value: 'NÃO TENHO CERTEZA', label: 'NÃO TENHO CERTEZA', trigger: '59' },
        ], 
       },
  
       {
        id: '57',
        message: 'Mesmo com as obras sobre o passeio, há garantia de faixa livre de 1,20m de circulação?',
        trigger: '58',
    },
    {
        id: '58',
        metadata: {
          code: 26,
        },
        options: [
          { value: 'SIM, TOTALMENTE', label: 'SIM, TOTALMENTE', trigger: '59' },
          { value: 'SIM, NA MAIOR PARTE', label: 'SIM, NA MAIOR PARTE', trigger: '59' },
          { value: 'SIM, NA MENOR PARTE', label: 'SIM, NA MENOR PARTE', trigger: '59' },
          { value: 'NÃO', label: 'NÃO', trigger: '59' },
          { value: 'NÃO TENHO CERTEZA', label: 'NÃO TENHO CERTEZA', trigger: '59' },
        ], 
       },
  
       {
        id: '59',
        message: 'Há sinalização tátil direcional na calçada?',
        trigger: '60',
    },
  
    {
        id: '60',
        metadata: {
          code: 27,
        },
        options: [
          { value: 'SIM, TOTALMENTE', label: 'SIM, TOTALMENTE', trigger: '61' },
          { value: 'SIM, NA MAIOR PARTE', label: 'SIM, NA MAIOR PARTE', trigger: '61' },
          { value: 'SIM, NA MENOR PARTE', label: 'SIM, NA MENOR PARTE', trigger: '61' },
          { value: 'NÃO', label: 'NÃO', trigger: '63' },
          { value: 'NÃO TENHO CERTEZA', label: 'NÃO TENHO CERTEZA', trigger: '63' },
        ], 
       },
  
       {
        id: '61',
        message: 'A sinalização tátil direcional é antiderrapante, com relevo e contrastante?',
        trigger: '62',
    },
    {
        id: '62',
        metadata: {
          code: 28,
        },
        options: [
          { value: 'SIM, TOTALMENTE', label: 'SIM, TOTALMENTE', trigger: '63' },
          { value: 'SIM, NA MAIOR PARTE', label: 'SIM, NA MAIOR PARTE', trigger: '63' },
          { value: 'SIM, NA MENOR PARTE', label: 'SIM, NA MENOR PARTE', trigger: '63' },
          { value: 'NÃO', label: 'NÃO', trigger: '63' },
          { value: 'NÃO TENHO CERTEZA', label: 'NÃO TENHO CERTEZA', trigger: '63' },
        ], 
       },
  
       {
        id: '63',
        message: 'Há sinalização tátil de alerta na calçada em mudanças de direção, opções ou interferências de percuso?',
        trigger: '64',
    },
    {
        id: '64',
        metadata: {
          code: 29,
        },
        options: [
          { value: 'SIM, TOTALMENTE', label: 'SIM, TOTALMENTE', trigger: '65' },
          { value: 'SIM, NA MAIOR PARTE', label: 'SIM, NA MAIOR PARTE', trigger: '65' },
          { value: 'SIM, NA MENOR PARTE', label: 'SIM, NA MENOR PARTE', trigger: '65' },
          { value: 'NÃO', label: 'NÃO', trigger: '67' },
          { value: 'NÃO TENHO CERTEZA', label: 'NÃO TENHO CERTEZA', trigger: '67' },
        ], 
       },
  
       {
        id: '65',
        message: 'A sinalização tátil de alerta é antiderrapante, com relevo cor contrastante?',
        trigger: '66',
    },
  
    {
        id: '66',
        metadata: {
          code: 30,
        },
        options: [
          { value: 'SIM, TOTALMENTE', label: 'SIM, TOTALMENTE', trigger: '67' },
          { value: 'SIM, NA MAIOR PARTE', label: 'SIM, NA MAIOR PARTE', trigger: '67' },
          { value: 'SIM, NA MENOR PARTE', label: 'SIM, NA MENOR PARTE', trigger: '67' },
          { value: 'NÃO', label: 'NÃO', trigger: '67' },
          { value: 'NÃO TENHO CERTEZA', label: 'NÃO TENHO CERTEZA', trigger: '67' },
        ], 
       },
  
       {
        id:'67',
        message: 'Obrigado pela avaliação!',
        end:true
      }
  ];

  const sendAvaliation = useCallback(
    async (data) => {
     // await axios.post
      navigation.navigate('MenuPrincipal')
    },
    []
  )


  const handleEnd = useCallback(
    ({ steps, values }) => {
     
      const data = {
        email: null,
        address: {
          postalCode: null
        },
        answers: []
      }
      steps.map((element) => {

        console.log(element)
        if(element.value != undefined && element.id != null){

          if(element.id === '3'){
            data.email = element.value;
          }
          else if(element.id === '1'){
            data.address.postalCode = element.value;
          }
          else{
            data.answers.push({code: element.metadata?.code , answer: element.value })
          }
        }
      })
  
      sendAvaliation(data)
    },
    []
  )

    return (
      <SafeAreaView>
          <ChatBot 
            handleEnd={ handleEnd }
            steps={ constSteps } 
          />
      </SafeAreaView>
    )
  }

export default CadastrarAvaliacao