export async function getVendas(produto?: string, mes?: number, page?: number) {
    if (!page) page = 1;
    page = page - 1;

    const queryParam = new URLSearchParams();
    if (produto) queryParam.append('produtoNome', produto);
    if (mes) queryParam.append('mes', mes.toString());
    queryParam.append('page', page.toString());

    const url = `${process.env.API_BASE_URL}/venda?${queryParam.toString()}`;
    const resp = await fetch(url, { next: { revalidate: 0 } });
    const json = await resp.json();
    return json;
}
