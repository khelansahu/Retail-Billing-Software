package in.khelaninfo.billingsoftware.dao;

import java.util.List;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import in.khelaninfo.billingsoftware.dto.ItemEntity;
import in.khelaninfo.billingsoftware.repository.ItemRepository;

@Repository
public class ItemDao {

	@Autowired
	private ItemRepository itemRepository;

	public ItemEntity addItem(ItemEntity itemEntity) {
		
		ItemEntity item = itemRepository.findByItemId(itemEntity.getItemId());

		if (item != null) {
			return null;
		} else {
			itemEntity.setItemId("ITEM" + UUID.randomUUID().toString().substring(0, 8).toUpperCase());
			return itemRepository.save(itemEntity);
		}
	}
	
	public List<ItemEntity> fetchItems() {
		return itemRepository.findAll();
	}
	public ItemEntity deleteItemById(String itemId) {
		ItemEntity item = itemRepository.findByItemId(itemId);
		if (item!=null) {
			itemRepository.delete(item);
			return item;
		}else {
			return null;
		}
	}
}
