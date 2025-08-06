package in.khelaninfo.billingsoftware.entity.controller;

import java.io.IOException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.fasterxml.jackson.databind.ObjectMapper;

import in.khelaninfo.billingsoftware.dto.ItemEntity;
import in.khelaninfo.billingsoftware.io.itemRequest;
import in.khelaninfo.billingsoftware.io.itremRequest;
import in.khelaninfo.billingsoftware.service.ItemService;
import in.khelaninfo.billingsoftware.util.ListResponseStructure;
import in.khelaninfo.billingsoftware.util.ResponseStructure;

@CrossOrigin("*")
@RestController
public class ItemController {

	@Autowired
	private ItemService itemService;

//	@PostMapping("/additem")
//	public ResponseEntity<ResponseStructure<ItemEntity>> addItem(
//			@RequestPart("itemEntity")  itemRequest itemJson,
//			@RequestPart(value="file", required = false) MultipartFile file) throws IOException {
//		
//		return itemService.addItem(itemJson, file);
//	}

	@PostMapping(value = "/additem", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
	public ResponseEntity<ResponseStructure<ItemEntity>> addItem(@RequestPart("itemEntity") String itemJson,
			@RequestPart(value = "file", required = false) MultipartFile file) throws IOException {

		ObjectMapper mapper = new ObjectMapper();
		itemRequest itemDto = mapper.readValue(itemJson, itemRequest.class);

		return itemService.addItem(itemDto, file);
	}

	@GetMapping("/fetchitems")
	public ResponseEntity<ListResponseStructure<ItemEntity>> fetchItems() {
		return itemService.fetchItems();
	}

	@DeleteMapping("/deleteitem/{itemId}")
	public ResponseEntity<ResponseStructure<ItemEntity>> deleteItemsById(@PathVariable String itemId) {
		return itemService.deleteItemById(itemId);
	}
}
