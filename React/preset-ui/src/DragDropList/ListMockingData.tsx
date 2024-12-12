const getItems = (count: number) => {
  const itemInfoList = Array.from({ length: count }, (v, k) => k).map((k) => ({
    id: `item-${k}`,
    primary: `item ${k}`,
    secondary: k % 2 === 0 ? `Whatever for ${k}` : undefined,
  }));

  return itemInfoList.map((item) => (
    <>
      {item.id} {item.primary}
    </>
  ));
};

export const ListMockingData = getItems(10);
