export let servicos: any[] = [];

export const adicionarServico = (servico: any) => {
  servicos.push(servico);
};

export const atualizarServico = (servicoAtualizado: any) => {
  servicos = servicos.map((s) =>
    s.id === servicoAtualizado.id ? servicoAtualizado : s
  );
};

export const deletarServico = (id: number) => {
  servicos = servicos.filter((s) => s.id !== id);
};