const arr1 = [
  {
    tmpArtigos0: 1,
    tmpArtigos1: 2,
    tmpArtigos2: "value",
    tmpArtigos3: 1064,
    tmpArtigos4: "whatever",
    tmpArtigos5: "outro valor",
  },
  {
    tmpArtigos0: 1,
    tmpArtigos1: 2,
    tmpArtigos2: "value",
    tmpArtigos3: 1064,
    tmpArtigos4: "whatever",
    tmpArtigos5: "outro valor",
  },
  {
    tmpArtigos0: 1,
    tmpArtigos1: 2,
    tmpArtigos2: "value",
    tmpArtigos3: 1064,
    tmpArtigos4: "whatever",
    tmpArtigos5: "outro valor",
  },
  {
    tmpArtigos0: 1,
    tmpArtigos1: 2,
    tmpArtigos2: "value",
    tmpArtigos3: 1064,
    tmpArtigos4: "whatever",
    tmpArtigos5: "outro valor",
  },
];

const arr2 = [
  {
    CDU_CampoOrigem: 1,
    CDU_CampoDestino: "Descricao",
    CDU_CampoTipo: "string",
  },
  {
    CDU_CampoOrigem: 5,
    CDU_CampoDestino: "Artigo",
    CDU_CampoTipo: "string",
  },
  {
    CDU_CampoOrigem: 2,
    CDU_CampoDestino: "Familia",
    CDU_CampoTipo: "string",
  },
  {
    CDU_CampoOrigem: 4,
    CDU_CampoDestino: "MovStock",
    CDU_CampoTipo: "string",
  },
  {
    CDU_CampoOrigem: 3,
    CDU_CampoDestino: "IVA",
    CDU_CampoTipo: "string",
  },
];

const numeroLinhasTmp = arr1.length;
const numeroLinhasDenormalize = arr2.length;

const normalizedArr = [];

function saveToDb(obj) {
  normalizedArr.push(obj);
}

for (let i = 0; i < numeroLinhasTmp; i++) {
  //
  const rowNaTabelaTmp = arr1[i];

  const objDinamico = {};

  for (let j = 0; j < numeroLinhasDenormalize; j++) {
    const rowNaTabelaDasRelacoes = arr2[j];

    const colunaNoI = "tmpArtigos" + rowNaTabelaDasRelacoes.CDU_CampoOrigem;

    const colunaNaTabelaCerta = rowNaTabelaDasRelacoes.CDU_CampoDestino;

    const valorNaColunaDoI = rowNaTabelaTmp[colunaNoI];

    objDinamico[colunaNaTabelaCerta] = valorNaColunaDoI;
  }

  saveToDb(objDinamico);
}

console.log(normalizedArr);
