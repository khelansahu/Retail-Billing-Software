package in.khelaninfo.billingsoftware.util;

import java.time.LocalDateTime;
import java.util.List;

import lombok.Data;

@Data
public class CategoryResponseStructure<T> {
	private String msg;
	private T data;
	private int statusCode;
	private LocalDateTime dateTime = LocalDateTime.now();
}
