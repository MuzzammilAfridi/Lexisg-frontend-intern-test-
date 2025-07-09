
import React, { useState } from 'react';
import QueryInput from './components/QueryInput';
import AnswerCard from './components/AnswerCard';

function App() {
  const [qus, setQus] = useState('');
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);

 const handleSubmit = () => {
  setLoading(true);

  setTimeout(() => {
    const response = {
      answer:
        'Yes, under Section 166 of the Motor Vehicles Act, 1988, the claimants are entitled to an addition for future prospects even when the deceased was self-employed and aged 54–55 years at the time of the accident. In Dani Devi v. Pritam Singh, the Court held that 10% of the deceased’s annual income should be added as future prospects.',
      citations: [
        {
          text:
            'As the age of the deceased at the time of accident was held to be about 54–55 years by the learned Tribunal, being self-employed, as such, 10% of annual income should have been awarded on account of future prospects.',
          source: 'Dani_Devi_v_Pritam_Singh.pdf',
          link: '/Dani Vs Pritam (Future 10 at age 54-55).pdf'
        }
      ]
    };

    setResponse(response);
    setLoading(false);
  }, 1000);
};


  return (
    <div className=" bg-cyan-100 p-6 flex min-h-screen flex-col items-center">
      <h1 className=" font-[500] mb-6 text-[25px] ">Lexi  Assistant</h1>
      {response && (
        <AnswerCard citation={response.citations[0]} answer={response.answer}
        
        />
      )}
      <QueryInput qus={qus} loading={loading} handleSubmit={handleSubmit} setQus={setQus}
      />
      
    </div>
  );
}

export default App;
