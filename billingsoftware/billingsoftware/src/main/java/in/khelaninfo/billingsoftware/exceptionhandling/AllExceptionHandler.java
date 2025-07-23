package in.khelaninfo.billingsoftware.exceptionhandling;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import com.khelaninfo.studentandcoursemanagementsystem.exception.StudentNotFound;

import in.khelaninfo.billingsoftware.exception.CategoryAlreadyExistException;
import in.khelaninfo.billingsoftware.exception.CategoryNotFoundException;

@RestControllerAdvice
public class AllExceptionHandler {

	@ExceptionHandler(CategoryAlreadyExistException.class)
	public ResponseEntity<String> categoryAlreadyExist(CategoryAlreadyExistException alreadyExistException) {
		ResponseEntity<String> responseEntity = new ResponseEntity<String>(alreadyExistException.getMessage(),
				HttpStatus.CONFLICT);
		return responseEntity;
	}

	@ExceptionHandler(CategoryNotFoundException.class)
	public ResponseEntity<String> categoruNotFound(CategoryNotFoundException categoryNotFoundException) {
		ResponseEntity<String> responseEntity = new ResponseEntity<String>(categoryNotFoundException.getMessage(),
				HttpStatus.NOT_FOUND);
		return responseEntity;
	}
}
