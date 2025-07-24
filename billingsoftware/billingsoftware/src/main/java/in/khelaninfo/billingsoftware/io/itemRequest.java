package in.khelaninfo.billingsoftware.io;

import java.math.BigDecimal;

import lombok.Data;

@Data
public class itemRequest {

	private String name;
	private String description;
	private BigDecimal price;
	private String categoryId;
}
