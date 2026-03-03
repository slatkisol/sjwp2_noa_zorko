import { select } from '@inquirer/prompts';

try {
  const pitanje = await select({
    message: 'Odaberi opciju',
    choices: [
      { name: 'hrv', value: 'Hrvatski jezik' },
      { name: 'str', value: 'Strani jezik' },
      { name: 'mat', value: 'Matematika' },
      { name: 'pro', value: 'Programiranje' }
    ]
  });

  if (pitanje === 'Hrvatski jezik') {
    console.log('Odabra si Hrvatski jezik');
  } else if(pitanje=='Strani jezik') {
    console.log('Odabrao si strani jezik');
  }

  else if(pitanje=='Matematika'){
    console.log('Odabra si matematiku')
  }
  else{
    console.log('Odabrao si programiranje');
  }

} catch (error) {
  console.error(error);
}