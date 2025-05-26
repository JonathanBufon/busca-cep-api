<?php
header('Content-Type: application/json');

/**
 * Consulta os dados de um CEP utilizando a API ViaCEP.
 */
function consultarCepViaCep(string $cep): ?array
{
    $cep = preg_replace('/[^0-9]/', '', $cep);

    if (strlen($cep) !== 8) {
        return ['erro' => true, 'mensagem' => 'CEP inválido'];
    }

    $url = "https://viacep.com.br/ws/{$cep}/json/";
    $response = @file_get_contents($url);

    if ($response === false) {
        return ['erro' => true, 'mensagem' => 'Erro ao consultar a API'];
    }

    $dados = json_decode($response, true);

    if (isset($dados['erro']) && $dados['erro'] === true) {
        return ['erro' => true, 'mensagem' => 'CEP não encontrado'];
    }

    return $dados;
}

if (isset($_GET['cep'])) {
    echo json_encode(consultarCepViaCep($_GET['cep']));
} else {
    echo json_encode(['erro' => true, 'mensagem' => 'CEP não informado']);
}
