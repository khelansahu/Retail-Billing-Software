package in.khelaninfo.billingsoftware.service;

import java.io.IOException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import in.khelaninfo.billingsoftware.dao.CategoryDao;
import in.khelaninfo.billingsoftware.dao.ItemDao;
import in.khelaninfo.billingsoftware.dto.CategoryEntity;
import in.khelaninfo.billingsoftware.dto.ItemEntity;
import in.khelaninfo.billingsoftware.exception.ItemNotFoundException;
import in.khelaninfo.billingsoftware.io.itemRequest;
import in.khelaninfo.billingsoftware.util.ListResponseStructure;
import in.khelaninfo.billingsoftware.util.ResponseStructure;

@Service
public class ItemService {

	@Autowired
	private ItemDao itemDao;
	
	@Autowired
	private CategoryDao categoryDao;
	
	ResponseStructure<ItemEntity> structure=new ResponseStructure<ItemEntity>();
	ListResponseStructure<ItemEntity> listStructure=new ListResponseStructure<ItemEntity>();
	
	public ResponseEntity<ResponseStructure<ItemEntity>> addItem(itemRequest itemEntity, MultipartFile file) throws IOException {
		
		CategoryEntity category = categoryDao.findByCategoyId(itemEntity.getCategoryId());
		if (category==null) {
			throw new ItemNotFoundException("Not found");
		}
		ItemEntity entity=new ItemEntity();
		entity.setName(itemEntity.getName());
		entity.setDescription(itemEntity.getDescription());
		entity.setPrice(itemEntity.getPrice());
		entity.setCategory(category);
		
		
		if (file!=null && !file.isEmpty()) {
			entity.setImgUrl(file.getBytes());
		}else {
			entity.setImgUrl(null);
		}
		
		ItemEntity item = itemDao.addItem(entity);
		structure.setMsg("item saved succesfully"+(file!=null && !file.isEmpty()?"with image":"without image"));
		structure.setData(item);
		structure.setStatusCode(HttpStatus.CREATED.value());
		
		return new ResponseEntity<ResponseStructure<ItemEntity>>(structure,HttpStatus.CREATED);
	}
	
	public ResponseEntity<ListResponseStructure<ItemEntity>> fetchItems() {
		List<ItemEntity> listOfItems = itemDao.fetchItems();
		if (listOfItems!=null) {
			listStructure.setMsg("find all items");
			listStructure.setDataList(listOfItems);
			listStructure.setStatusCode(HttpStatus.OK.value());
			return new ResponseEntity<ListResponseStructure<ItemEntity>>(listStructure,HttpStatus.OK);
		}else {
			throw new ItemNotFoundException("item is not available");
		}
	}
	
	public ResponseEntity<ResponseStructure<ItemEntity>> deleteItemById(String itemId) {
		ItemEntity item = itemDao.deleteItemById(itemId);
		if (item!=null) {
			structure.setMsg("item deleted");
			structure.setData(itemDao.deleteItemById(itemId));
			structure.setStatusCode(HttpStatus.OK.value());
			return new ResponseEntity<ResponseStructure<ItemEntity>>(structure,HttpStatus.OK);
		}else {
			throw new ItemNotFoundException("item not availbel");
		}
	}
	
}
