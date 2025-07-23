package in.khelaninfo.billingsoftware.util;

import java.time.LocalDateTime;
import java.util.List;

import lombok.Data;

@Data
public class CategoryResponseStructureList<T> {
	private String msg;
	private List<T> dataList;
	private int statusCode;
	private LocalDateTime dateTime = LocalDateTime.now();
}
